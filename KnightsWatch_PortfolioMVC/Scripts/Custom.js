$(function () {
    $("#btnFact").click(function () {
        //Step 1: Get the data
        var number1 = Number($("#factNum").val());

        //Step 2: Do my calculation
        var result = Factorial(number1);

        //Step 3: Output the result
        $("#factResult").text(result);

    });

    $("#btnPalindrome").click(function () {
        //Step 1: Get the user input
        var input = $("#txtWord").val().toLowerCase();

        //Step 2: Run it through the ReverseAString method
        var output = ReverseAString3(input);

        //Step 3: Compare it to the original and write the appropriate output
        if (input == output) {
            $("#palindromeResult").text("The word " + input + " reversed equals " + output + ". These two are the same and therefore " + input + " is a Palindrome!");
        }
        else {
            $("#palindromeResult").text("The word " + input + " reversed equals " + output + ". These two are NOT the same and therefore " + input + " is NOT a Palindrome!");
        }
    });

    $("#btnFB").click(function () {
        var num1 = +$("#txtFizz").val();
        var num2 = +$("#txtBuzz").val();

        var output1 = FizzBuzz(num1, num2);
        var output2 = FizzBuzz2(num1, num2);

        $("#fbOut").html(output1);
        $("#fbOut2").html(output2);
    });

    function Factorial(number) {
        //For loop
        for (var loop = number - 1; loop > 1; loop--) {
            number *= loop;
        }
        return number;
    }

    function ReverseAString1(word) {
        var output = "";
        for (var index = word.length - 1; index >= 0; index--) {
            output += word.substr(index, 1);
        }
        return output;
    }

    function ReverseAString3(word) {
        var output = "";

        for (var index = word.length - 1; index >= 0; index--) {
            var character = word[index];
            output += character;
        }
        return output;
    }

    function ReverseAString4(word) {
        return word.split('').reverse().join('');
    }

    function FizzBuzz(num1, num2) {
        var output = new Array();
        for (var loop = 1; loop <= 100; loop++) {
            //var fizz = loop % num1;
            //var buzz = loop % num2;

            //if (!fizz && !buzz)
            //    output.push("<span class='fizz-buzz'>Fizz-Buzz</span>");
            //else if (!fizz)
            //    output.push("<span class='fizz'>Fizz</span>");
            //else if (!buzz)
            //    output.push("<span class='buzz'>Buzz</span>");
            //else
            //    output.push(loop);

            var fizz = loop % num1 == 0;
            var buzz = loop % num2 == 0;

            if (fizz && buzz)
                output.push("<span class='fizz-buzz'>Fizz-Buzz</span>");
            else if (fizz)
                output.push("<span class='fizz'>Fizz</span>");
            else if (buzz)
                output.push("<span class='buzz'>Buzz</span>");
            else
                output.push("<span class='loop'>" + loop + "</span>");
        }
        return output.join(', ');
    }

    function FizzBuzz2(num1, num2) {
        var output = "";
        for (var loop = 1; loop <= 100; loop++) {
            if (loop % num1 == 0 && loop % num2 == 0)
                output += "<span class='fizz-buzz'>Fizz-Buzz</span>, ";
            else if (loop % num1 == 0)
                output += "<span class='fizz'>Fizz</span>, ";
            else if (loop % num2 == 0)
                output += "<span class='buzz'>Buzz</span>, ";
            else
                output += "<span class='loop'>" + loop + "</span>, ";
        }

        return output.substr(0, output.length - 2);
    }

});