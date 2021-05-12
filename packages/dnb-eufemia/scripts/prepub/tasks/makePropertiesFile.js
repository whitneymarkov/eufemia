/**
 * Prepublish Task
 *
 */

import gulp from 'gulp'
import rename from 'gulp-rename'
import transform from 'gulp-transform'
import prettier from 'prettier'
import packpath from 'packpath'
import { log } from '../../lib'

const ROOT_DIR = packpath.self()

export default async function makePropertiesFile() {
  await runFactory()

  log.succeed(
    '> PrePublish: "makePropertiesFile" creating properties file done'
  )
}

const transformModulesContent = (content) => {
  const variables = content
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.startsWith('--'))
    .map((s) => s.split(':').map((s) => s.trim()))
    .reduce((acc, [k, v]) => {
      acc[k] = v
        .split(';')[0]
        .replace(/\/\* .* \*\//g, '')
        .trim()
      return acc
    }, {})

  return (
    String(
      prettier.format(
        `/** This file is auto generated by makePropertiesFile.js */

export default ${JSON.stringify(variables, null, 2)}`,
        {
          filepath: 'file.js',
          semi: true,
          trailingComma: 'none',
          singleQuote: true,
        }
      )
    ).trim() + ' // prettier-ignore\n' // so manual changes not removes the semi
  )
}

export const runFactory = ({ returnResult = false } = {}) =>
  new Promise((resolve, reject) => {
    log.start('> PrePublish: transforming style modules')
    try {
      gulp
        .src(
          [
            './src/style/**/properties.scss',
            '!**/__tests__/**',
            '!**/*_not_in_use*/**/*',
          ],
          {
            cwd: ROOT_DIR,
          }
        )
        .pipe(transform('utf8', transformModulesContent))
        .pipe(
          rename({
            dirname: './',
            prefix: '',
            extname: '.js',
          })
        ) // rename
        .pipe(
          returnResult
            ? transform('utf8', (result) => resolve(result))
            : gulp.dest('./src/style', {
                overwrite: true,
                cwd: ROOT_DIR,
              })
        )
        .on('end', resolve)
        .on('error', reject)
    } catch (e) {
      reject(e)
    }
  })
