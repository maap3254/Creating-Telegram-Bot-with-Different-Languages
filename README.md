This is a Telegram bot designed to assist users in navigating a collection of website categories.
1. Initialization:    - The bot is initialized using the Telegraf library.
   - Admin chat ID and icons for various categories are defined.
2. Keyboards:    - Keyboards are defined for different language options and website categories using Telegram's Markup.keyboard method.
   - Each keyboard corresponds to different categories and languages.
3. Language Selection:    - Users are prompted to select their preferred language when they start interacting with the bot.
4. Message Handling: 
   - The bot handles user input by sending welcome messages, category menus, and language change options.   - Relevant keyboards are provided for user interaction.
6. Response Handling: 
   - The bot listens for specific commands or messages from users and replies accordingly.   - When users select a website category, it replies with the corresponding keyboard for that category.
8. Action Handling: 
   - When a user interacts with the inline keyboard by clicking on "Order", the bot captures this action and notifies the admin about the order.   - If the user's Telegram username is available, the bot sends them a confirmation message with instructions.
   - If not, it prompts them to set their username.
9. Error Handling:    - Error handling is implemented to catch and log any errors that occur during the bot's operation.
10. Response with Photo and Inline Keyboard: 
    - When the bot receives one of the commands, it replies with a photo of a law symbol and a message describing the legal services.    - It also provides an inline keyboard with options for the user to view a sample or place an order.

Here are the instructions for using the files
1. Set Up Telegram Bot:   - Create a new bot on Telegram using the BotFather.
   - Obtain the bot token provided by BotFather.
2. Set Up Node.js Environment:   - Make sure you have Node.js installed on your machine.
3. Install Dependencies:
   - Navigate to your project directory in the terminal.   - Run npm install to install the required dependencies, such as node-telegram-bot-api.
4. Replace Tokens:
   - Replace YOUR_TELEGRAM_BOT_TOKEN with the token obtained from BotFather.   - Replace admin_chat_id with the chat ID of the admin where notifications will be sent.
5. Run the Bot:
   - Execute the Node.js script (`node your_script_name.js`).   - The bot should now be running and listening for commands and interactions.

You can run it in your cPanel for that and other feedback contact me at telegram @maapdemy
