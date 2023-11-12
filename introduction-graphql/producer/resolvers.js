const resolvers = {
    Query: {
        pid: () => process.pid,
        recipe: async (obj, { id }) => {
            if(Number(id) !== 42) {
                throw new Error(`recipe ${id} not found`)
            }
            return {
                id, name: 'Chicken Tikka Masala',
                steps: 'Throw it in a pot...'
            }
        }
    },
    Recipe: {
        ingredients: async (obj) => {
            return (Number(obj.id) !== 42) ? [] : [
                { id: 1, name: 'Chicken', quantity: '1 lb' },
                { id: 2, name: 'Sauce', quantity: '2 cups' },
            ]
        }
    }
}

module.exports = resolvers;