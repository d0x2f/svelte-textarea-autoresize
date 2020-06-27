describe('AutoresizingTextarea', () => {
  beforeEach((browser, done) => {
    browser.url('http://localhost:5000/#/', () => done())
  })

  it('textarea is visible', async (browser) =>
    browser.waitForElementVisible('#textarea'))

  it('textarea has height of 30px', (browser) =>
    browser.assert.cssProperty('#textarea', 'height', '30px'))

  describe('with lots of content', () => {
    beforeEach((browser, done) => {
      browser.setValue(
        '#textarea',
        "They're not tricks, Michael, they're illusions.",
        () => done(),
      )
    })

    it('textarea has height of 45px', async (browser) =>
      browser.assert.cssProperty('#textarea', 'height', '45px'))
  })
})
