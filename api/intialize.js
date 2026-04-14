async function createApiConnection(character) {
    const name = formatCharacterName(character);
    const res = await fetch(`https://safebooru.org/index.php?page=dapi&s=post&q=index&limit=10000&json=1&tags=${name}`);
    if(!res.ok) {
        console.log('Error fetching images');
        return false;
    }
    const data = await res.json();
    return data;
}


function formatCharacterName(character) {
    const name = character.join("_");
    return name;
}


module.exports = {
    createApiConnection
};