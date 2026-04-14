const api = require('../api/intialize');
const embedBuild = require('../embed/embed');

async function search(channel, args, command, client) {
    const result = await api.createApiConnection(args)
    if (!result) {
        return;
    }

    const rng_arr = [];
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * result.length) + 0;
        rng_arr.push(num);
    }


    rng_arr.forEach((item) => {
        let image = result[item];
        console.log(result[item]);
        channel.send({ embeds: [embedBuild("Tìm thấy ảnh", `Nguồn: ${image.source}`, `${image.file_url}`, `Fetched by ${client.user.tag}`, `${client.user.avatarURL()}`)] })
    })

}


module.exports = search;