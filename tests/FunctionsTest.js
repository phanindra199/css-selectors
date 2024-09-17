describe("CSS Selectors Assignment", function() {

  describe("Task 1: Basic Selectors", function() {

      it("should apply the correct styles to paragraphs", function() {
          var paragraph = document.querySelector('p');
          var computedStyle = getComputedStyle(paragraph);
          expect(computedStyle.fontSize).toBe('16px');
          expect(computedStyle.lineHeight).toBe('24px'); // 1.5 times 16px
      });

      it("should apply the correct styles to sections with the class .section-content", function() {
          var sectionContent = document.querySelector('.section-content');
          var computedStyle = getComputedStyle(sectionContent);
          expect(computedStyle.backgroundColor).toBe('rgb(211, 211, 211)'); // lightgrey in RGB
      });

      it("should apply the correct styles to the header with the ID #main-header", function() {
          var mainHeader = document.querySelector('#main-header');
          var computedStyle = getComputedStyle(mainHeader);
          expect(computedStyle.backgroundColor).toBe('rgb(0, 0, 128)'); // navy in RGB
          expect(computedStyle.color).toBe('rgb(255, 255, 255)'); // white in RGB
          expect(computedStyle.textAlign).toBe('center');
      });
  });

  describe("Task 2: Grouping and Universal Selectors", function() {

      it("should apply the correct font family to headers and sections", function() {
          var elements = document.querySelectorAll('h1, h2, .section-content');
          elements.forEach(function(element) {
              var computedStyle = getComputedStyle(element);
              expect(computedStyle.fontFamily).toContain('Arial');
          });
      });

  
  });

  describe("Task 3: Descendant and Child Selectors", function() {

      it("should apply the correct color to all list items within the #book-list section", function() {
          var listItems = document.querySelectorAll('#book-list li');
          listItems.forEach(function(listItem) {
              var computedStyle = getComputedStyle(listItem);
              expect(computedStyle.color).toBe('rgb(0, 100, 0)'); // dark green in RGB
          });
      });

      it("should apply bold font weight to immediate list items in the #book-list section", function() {
          var immediateListItems = document.querySelectorAll('#book-list > li');
          immediateListItems.forEach(function(listItem) {
              var computedStyle = getComputedStyle(listItem);
              expect(computedStyle.fontWeight).toBe('700'); // bold
          });
      });
  });

  describe("Task 4: Pseudo-class and Pseudo-element Selectors", function() {

    

      it("should style the first letter of each paragraph correctly", function() {
          var paragraph = document.querySelector('p');
          var computedStyle = window.getComputedStyle(paragraph, '::first-letter');
          expect(computedStyle.fontSize).toBe('32px'); // 2em relative to default 16px
          expect(computedStyle.fontStyle).toBe('italic');
      });
  });

  describe("Task 5: Attribute Selectors", function() {

    it("should apply a blue border and a margin-bottom of 10px to text input", function() {
        var textInput = document.querySelector('input[type="text"]');
        var computedStyle = getComputedStyle(textInput);

        // Check for a blue border
        expect(computedStyle.borderTopColor).toBe('rgb(0, 0, 255)'); // blue border in RGB
        expect(computedStyle.borderRightColor).toBe('rgb(0, 0, 255)');
        expect(computedStyle.borderBottomColor).toBe('rgb(0, 0, 255)');
        expect(computedStyle.borderLeftColor).toBe('rgb(0, 0, 255)');

        // Check for a margin-bottom of 10px
        expect(computedStyle.marginBottom).toBe('10px');
    });

    it("should apply a green border to the email input", function() {
        var emailInput = document.querySelector('input[type="email"]');
        var computedStyle = getComputedStyle(emailInput);

        // Check for a green border
        expect(computedStyle.borderTopColor).toBe('rgb(0, 128, 0)'); // green border in RGB
        expect(computedStyle.borderRightColor).toBe('rgb(0, 128, 0)');
        expect(computedStyle.borderBottomColor).toBe('rgb(0, 128, 0)');
        expect(computedStyle.borderLeftColor).toBe('rgb(0, 128, 0)');
    });

});


});