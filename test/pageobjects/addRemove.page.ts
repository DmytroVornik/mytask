
import Page from './page'

class AddRemovePage extends Page {
    /**
     * define elements
     */
    get addButton() { return $('button*=Add Element') };
    get listOfDeleteButtons() { return $$('.added-manually') };
    get firstDeleteButton() { return $('#elements button:first-child') };
    get lastDeleteButton() { return $('#elements button:last-child') };

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('https://the-internet.herokuapp.com/add_remove_elements/')
    }

    listButtonsToBeClickable(listOfDeleteButtons) {
        for (let i = 0; i < listOfDeleteButtons.length; i++)
            expect(listOfDeleteButtons[i]).toBeClickable();
    }

    listButtonsNotToBeClickable(listOfDeleteButtons) {
        for (let i = 0; i < listOfDeleteButtons.length; i++)
            expect(listOfDeleteButtons[i]).not.toBeClickable();
    }

    addDeleteButton(value) {
        for (let i = 0; i < value; i++)
            this.addButton.click();
    }
}
export default new AddRemovePage()