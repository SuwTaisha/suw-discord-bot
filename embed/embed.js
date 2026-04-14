const { EmbedBuilder } = require("discord.js")


function embedBuild(title, description, image, footerText, footerUrl) {
    const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`${title}`)
        .setDescription(`${description}`)
        .setImage(`${image}`)
        .setTimestamp()
        .setFooter({ text: `${footerText}`, iconURL: `${footerUrl}` })
        return embed;
}

module.exports = embedBuild