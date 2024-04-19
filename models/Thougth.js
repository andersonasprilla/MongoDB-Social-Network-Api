const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

thoughtSchema
.virtual('getReactions')
.get(function () {
    return this.reactions.length
})

function formatDate(value) {
    return value ? value.toLocaleString('en-US') : '';
}


const Thought = model('thought', thoughtSchema)

module.exports = Thought