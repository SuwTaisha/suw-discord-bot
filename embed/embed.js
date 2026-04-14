const { EmbedBuilder } = require("discord.js")


function embedBuild(title, description, image, footerText, footerUrl) {
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${title}`)
        .setDescription(`${description}`)
        .setImage(`${image}`)
        .setTimestamp()
        .setFooter({ text: `${footerText}`, iconURL: `${footerUrl}` })
        return exampleEmbed;
}

module.exports = embedBuild