import {basename} from 'node:path'

export default {
  process(_src, filename, _config, _options) {
    return 'module.exports = ' + JSON.stringify(basename(filename)) + ';'
  },
}
