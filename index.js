const {
	Composer
} = require('micro-bot')

const MediumExampleBot = new Composer()

MediumExampleBot.hears('hi', ({
	reply
}) => reply('Hello to you too !'))

MediumExampleBot.command('/test', context => {
	const { reply } = context
	reply('Test command received succesfully !')
	// const { message } = context.update
	// const userName = message.from.first_name
	// context.reply(devlogText(userName))
})

MediumExampleBot.command('/second', context => {
	const { reply } = context
	const { message } = context.update
	const userName = message.from.first_name
	reply(`Hello ${userName} this is my second command`)
})


MediumExampleBot.on('message', context => {

	const { reply, update } = context

	const { message } = update

	const { text } = message

	const userName = message.from.first_name

	const { new_chat_member } = message

	if (new_chat_member && !new_chat_member.is_bot) context.reply(`Hello ${new_chat_member.first_name} and welcome to this awesome group !`)

	if (text.includes('hi')) reply(`hi ${userName} to you too`)

})

module.exports = MediumExampleBot