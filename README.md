## Answers for lesson 0
1. I found that when the console logged the contents 
from the required second js file and I ran node marcy.js file
What was returned was an empty object. I think this is because the 
second file was empty at the moment. 

2. When I added a module.export and added key value pairs into the object, 
when we ran the same console log. Instead of getting an empty object we 
got the file contents for everything inside of module.exports. 

3. When I ran node marcy.js I didn't get an error. 
This is because eventhough I had added a function outside of the module.exports
object I invoked it as a value. By invoking it in the object it 
is able to reference back to the original function. 

4. I am really not sure of the results of requiring the same file 
many times but my guess is that it will just run the file the times 
that it is required. 

What actually happens is that it only stores it once and when I guess ignores the 
other requires. I think this is really cool because we wouldn't need to constantly 
add the require command so that we can see an updated version of the second file.

5. The client is the request that the browser makes to the terminal. In this case, 
the server is terminal since it is what is hosting the site. 

## Answers for Lesson 1
1. Status codes are important because they allow us to understand the website better. Each status code has its own meaning that basically tells the user what is going wrong or right. 

2. A URI is an uniform reference identifier. It is a number given to a url to specify what the url is. A URL is what we identify as the link to a webpage/ website. It is written with characters instead of numbers. 

3. Query parameters are used to help specify the location as much as possible. We can use them when we want to manipulate the webpage in some way to render different data each time depending on the querys that were specified. 