"use strict";

jest.mock("./index");
const met = require("./index");

/**
 * @jest-environment jsdom
 */
test("testing ", () => {
    //set up document body
    document.body.innerHTML = 
    "<div>" + 
    ' <script>function index(){document.getElementById("demo").innerHTML = "USB!";}</script> ' +
    '  <p>What do you call an American Bee?</p>' +
    '  <p id="demo">An American Bee is a ...</p>'+ 
    '  <button onclick="">Click me</button>' +
    "</div>";

    require("./index");
    
    const $ = require("jquery");
    
    $("button").click();
    
    
})