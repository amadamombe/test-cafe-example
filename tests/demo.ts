import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://devexpress.github.io/testcafe/example`

test("Populate your name", async t => {
    await t
        .typeText('#developer-name', 'Augustine Madamombe')
        .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1');

    // Obtain the text of the article header
    let headerText = await articleHeader.innerText;

    await t
        .expect(headerText).eql('Thank you, Augustine Madamombe!')
});


test("Populate your sister's name", async t => {
    await t
        .typeText('#developer-name', 'Bonita Madamombe')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Bonita Madamombe!');
});