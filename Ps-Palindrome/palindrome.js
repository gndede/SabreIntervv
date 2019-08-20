//JavaScript function that checks a palindrome or not? 

function CheckPalindrome(StringEntry)
{
// convert string into lower case
   var CharacterString = StringEntry.replace(/[^a-zA-Z0-9]+/g,'')..toLowerCase();
    
	var StringCount = 0;
	
	return StringEntry == StringEntry.split('').reverse().join('');

// see if the string is empty
	if(CharacterString === "") 
	{
		console.log("Nothing found!");
		return false;
	}
	
// Is the leng of the string is an even integer or an odd integer?  
	if ((CharacterString.length) % 2 === 0) 
	{
		StringCount = ((CharacterString.length) / 2);
	} else {

// If length is 1 then we have a palindrome
		if (CharacterString.length === 1) 
		{
			console.log("Found Palindrome." + CharacterString);
			
			return true;
			
		} else {

//If the string's length is odd number then we ignore the middle character
			StringCount = ((CharacterString.length - 1) / 2);
		}
	}
	
	
// Iterate through to check the first character to the last character and then move to the next character
	for (var crossChar = 0; crossChar < StringCount; crossChar++) 
	{
		

// Lets compare characters in the string and drop them if they do not match  
		if (CharacterString[crossChar] != CharacterString.slice(-1-crossChar)[0]) 
		{
			console.log("No Palindrome exists.");
			return false;
		}
	}
			console.log("Found Palindrome.");
			return true;
}


//Test cases with examples
console.log('');console.log('');
console.log('------------------------');
CheckPalindrome('');
CheckPalindrome('madam');
CheckPalindrome('nurses run');
CheckPalindrome('fox');
CheckPalindrome('A man, a plan, a canal. Panama');
CheckPalindrome('nurses run');
CheckPalindrome('My age is 0, 0 si ega ym');
CheckPalindrome('racecar');
CheckPalindrome('racecar');
console.log('------------------------');