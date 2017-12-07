const { PromptView, Messages: { BotTextMessage } } = require('@botfuel/bot-sdk2');

class NameView extends PromptView {
  renderEntities(matchedEntities) {
    const name = matchedEntities.name && matchedEntities.name.values[0].value;

    if (name) {
      const [firstLetter, ...letters] = name;
      const capitalizedName = `${firstLetter.toUpperCase()}${letters.join('')}`;

      return [
        new BotTextMessage(`So your name is ${capitalizedName}... Hello ${capitalizedName}!`),
      ];
    }

    return [new BotTextMessage('Sorry, I did not understand!')];
  }
}

module.exports = NameView;
