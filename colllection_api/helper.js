exports.success = (message, data) =>{
    return { message, data }
}

exports.getUniqueId = (items) => {
    const itemIds = items.map(item => item.id)
    const maxId = itemIds.reduce((a,b) => Math.max(a, b))
    return maxId + 1

}