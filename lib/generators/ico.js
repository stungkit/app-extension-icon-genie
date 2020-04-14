const sharp = require('sharp')
const { writeFile } = require('fs')
const png2icons = require('png2icons')

module.exports = async function (file, opts, done) {
  const icon = sharp(opts.icon)
  const buffer = await icon.toBuffer()
  const output = await png2icons.createICO(buffer, png2icons.BICUBIC, 0, true)

  writeFile(file.absoluteName, output, done)
}