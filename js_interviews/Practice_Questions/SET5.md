1. Which of the following is not a CSS position?
    
    A. Absolute
    
    B. Relative
    
    C. Overflow

    // overflow is position type so correct answer c 

2. Which of the following is true?
    
    A. `@media (max-width: 500px){...}` means you want to apply rules to those media whose min-width is 500 px.
    
    B. `@media (max-width: 500px){...}` means you want to apply rules to those media whose max-width is 500 px.
    
    C. `@media (max-width: 500px){...}` means you want to apply rules only to Desktop view.

    // max-width apply width not more than 500 screent option b is correct 

    3. Which of the following is true?
    
    A. <p> is an inline element by default.
    
    B. inline-block elements have the same behaviour as block elements.
    
    C. <div> and <h1> are block elements by default.

    // c is true , p is block element, inline , block are different

    4. What will be the colour of the text ‘JavaScript’ in the following code?
    
    ```jsx
    <ul class="language-list" id="awesome">
        <li><span>Python</span></li>
        <li class="favorite" id="must-code">
    			<span class="highlight">JavaScript</span>
    		</li>
    </ul>
    
    <style>
      ul#awesome {
        color: red;
      }
      ul.language-list li.favorite span {
        color: blue;
      }
    </style>
    
    ```
    
    A. red
    
    B. blue
    
    C. black

    // apply blue , because it is more specific

    5. What will be the colour of the text ‘JavaScript’ in the following code?
    
    ```jsx
    <ul class="language-list" id="awesome">
        <li><span>Python</span></li>
        <li class="favorite" id="must-code">
    			<span class="highlight">JavaScript</span>
    		</li>
    </ul>
    
    <style>
      ul#awesome #must-code {
      color: red !important;
    }
    .favorite span {
      color: blue;
    }
    </style>
    
    ```
    
    A. red
    
    B. blue
    
    C. black

    // apply red colour because it  is more specific 

    6. What is the correct way to write style to display hyperlinks without an underline?
    
    A. a {text-decoration:none;}
    
    B. a {decoration:no-underline;}
    
    C.a {text-decoration:no-underline;}

    // a text-decoration-none

    7. What is the default value of the CSS position property?
    
    A. relative
    
    B. static
    
    C. absolute

    // default position is static


    8. Which is the correct CSS to display a border with top border = 10 pixels, bottom border = 5 pixels, left border = 20 pixels and right border = 1pixel?
    
    A. border-width:5px 20px 10px 1px;
    
    B. border-width:10px 20px 5px 1px;
    
    C. border-width:10px 1px 5px 20px;

    // border apply top , right, bottom , left
    // 10 , 1, 5, 20

    9. What is the correct JavaScript syntax to change the content of the HTML element below?
    
    ```jsx
    <p id="demo">I know Python</p>
    
    ```
    
    A. document.getElementById(”demo”).innerHTML = “I know JavaScript”
    
    B. document.getElement(”p”).innerHTML = “I know JavaScript”
    
    C. ”demo”.innerHTML = “I know JavaScript”

    // option a is correct

    