const app =require('./app')
const connectDb=require('./db/db')
connectDb()
/*process: In Node.js, process is a global object that provides information about the current process running the application (like its environment, runtime, and status).
uncaughtException: This is an event in Node.js that is triggered when an uncaught error occurs—meaning an error that wasn't caught by any try/catch block or error handler.*/
/*
No problem! Let’s break down what process is in Node.js in simpler terms, starting with the concepts of environment, runtime, and status.

1. What is process in Node.js?
In Node.js, process is a global object that gives you access to information and control over the current Node.js process.

A process is simply the running instance of your application. When you run a Node.js app, it’s a process running on your machine or server. The process object helps you interact with and control this running instance.

2. What is "Environment"?
Environment refers to the context or the conditions in which your application is running. This can be different for different stages of development and deployment.

For example:

Development environment: When you're writing and testing your code locally on your computer.
Production environment: When your application is running live on the internet for users to access.
You can set environment variables to store different settings or credentials for different environments.

Example:
In your code, you might use process.env.NODE_ENV to check whether your application is in development or production:

javascript
Copy
Edit
console.log(process.env.NODE_ENV);  // Output could be 'development', 'production', or 'test'
3. What is "Runtime"?
Runtime refers to the period when your application is running, after it has started executing. It’s the time when your Node.js application is active, processing requests, performing tasks, and interacting with data.

The runtime environment provides the necessary resources for your app to run, such as memory, CPU, and access to files.
Example:
When you run a Node.js app (node app.js), the runtime environment will include all the Node.js built-in modules (like fs, http, etc.) and any code you write that will be executed as your app runs.
4. What is "Status"?
The status of a process refers to its current state or the result of what the process is doing.

Some examples of status:

Running: The process is currently being executed.
Exited/Terminated: The process has finished or crashed.
Waiting: The process is paused or waiting for some resources, like user input or a database query.
In Node.js, you can use process.exit() to terminate the current process, and the exit code can help indicate if the process ended successfully (exit code 0) or with an error (non-zero exit code).

javascript
Copy
Edit
process.exit(0);  // Gracefully exits the process
5. Common Properties and Methods of process
Here are a few examples of process properties and methods that give you useful information about the environment, runtime, and status:

a. process.env (Environment Variables)
process.env gives you access to environment variables that contain important configuration settings.
Example:

javascript
Copy
Edit
console.log(process.env.NODE_ENV);  // 'development' or 'production'
b. process.argv (Command Line Arguments)
process.argv is an array that holds the command-line arguments passed when you run your Node.js app.
Example:

javascript
Copy
Edit
console.log(process.argv);  // ['node', 'app.js', 'arg1', 'arg2']
c. process.exit() (Exit the Process)
process.exit() allows you to stop the application programmatically.
You can pass a status code to indicate whether the process completed successfully or encountered an error.
Example:

javascript
Copy
Edit
process.exit(0);  // Exits successfully
process.exit(1);  // Exits with an error
d. process.uptime() (Runtime Duration)
process.uptime() returns how long the Node.js process has been running in seconds.
Example:

javascript
Copy
Edit
console.log(process.uptime());  // Prints the runtime duration in seconds
Summary of Key Concepts
Process: A running instance of your application.
Environment: The context or settings (e.g., development or production) in which the app runs.
Runtime: The period during which the app is actively running and processing tasks.
Status: The current state of the app (e.g., running, exited, waiting).
In Practice
The process object helps you interact with your Node.js application during its runtime by providing useful info like environment variables, command-line arguments, and the status of the process.

Example:

javascript
Copy
Edit
// Check if we're in a development environment
if (process.env.NODE_ENV === "development") {
    console.log("App is running in development mode.");
}

// Get the runtime duration of the app
console.log("App has been running for " + process.uptime() + " seconds.");
I hope that clears things up! Let me know if you'd like to dive deeper into any of these topics. 😊







You said:
what is process.on
ChatGPT said:
ChatGPT
The process.on() method in Node.js is used to listen for events emitted by the Node.js process.

It allows you to register event listeners for various events that are important for managing the behavior of your Node.js application while it is running. When the event happens, the callback function you provided to process.on() will be executed.

In simple terms, process.on() lets you react to specific events that occur in your application, like errors or the app shutting down.

Syntax:
javascript
Copy
Edit
process.on(event, listener);
event: The name of the event (e.g., exit, uncaughtException, SIGINT).
listener: A function that gets called when the event is emitted.
Common Use Cases of process.on()
Here are a few common events that you might use with process.on():

1. Listening for exit Event
The exit event is emitted when the Node.js process is about to exit. This gives you a chance to do some cleanup (e.g., closing files, saving data) before the process terminates.

javascript
Copy
Edit
process.on('exit', () => {
    console.log("The process is about to exit.");
});
2. Listening for uncaughtException Event
This event is emitted when an uncaught exception (error) occurs, meaning that an error has been thrown but it wasn't caught by any try/catch block.

javascript
Copy
Edit
process.on('uncaughtException', (err) => {
    console.error("Uncaught Exception: ", err.message);
    // Handle the error, or exit gracefully
    process.exit(1);  // Exit the process with an error code
});
This is useful for logging errors or cleaning up resources before the app crashes.
3. Listening for SIGINT Event (Ctrl+C)
The SIGINT event is emitted when the user interrupts the process (usually by pressing Ctrl+C in the terminal). You can listen for this event to perform cleanup or graceful shutdown operations before the process terminates.

javascript
Copy
Edit
process.on('SIGINT', () => {
    console.log("Received SIGINT. Gracefully shutting down...");
    process.exit();  // You can choose to exit gracefully
});
This is helpful when you want to gracefully shut down a server or release resources when the user stops the app.
4. Listening for beforeExit Event
The beforeExit event is emitted when Node.js is about to exit because the event loop is empty. This allows you to do final tasks before the process terminates.

javascript
Copy
Edit
process.on('beforeExit', () => {
    console.log("The event loop is empty. Process will exit soon.");
});
This is useful if you want to do some asynchronous work before the app exits.
Why Use process.on()?
Graceful Shutdown: Handle cleanup tasks (e.g., closing database connections or saving unsaved data) before the app stops.
Error Handling: Catch unexpected errors or exceptions and log them, ensuring your app doesn’t crash unexpectedly.
Custom Events: React to specific events, such as when a process receives a signal to terminate.
Example of Handling Uncaught Errors and Cleanup:
javascript
Copy
Edit
process.on('uncaughtException', (err) => {
    console.log("An error occurred: ", err.message);
    console.log("Performing cleanup before exiting...");
    // Close database connections, cleanup tasks...
    process.exit(1);  // Exit with an error code
});

// Simulating an uncaught exception:
throw new Error("Something went wrong!");
Output:

go
Copy
Edit
An error occurred: Something went wrong!
Performing cleanup before exiting...
Common Events You Can Listen to Using process.on()
exit: Emitted when the process is about to exit.
uncaughtException: Emitted when an uncaught error occurs.
SIGINT: Emitted when the process receives the Ctrl+C signal.
beforeExit: Emitted when the event loop is empty, and the process will exit soon.
SIGTERM: Emitted when the process is requested to terminate (e.g., from the operating system).
warning: Emitted when a warning is issued.
Summary
process.on() is used to register event listeners that handle different events in the Node.js process.
It helps you manage how your application responds to events like errors, signals, and process shutdowns.
Common uses include handling uncaught exceptions, performing cleanup tasks, and reacting to process termination signals.
Let me know if you need more detailed examples or explanations! 😊
*/

process.on("uncaughtException",(err)=>{
    console.log(`error: ${err.message}`)
    console.log(`submitting down the server for handling the uncaught exception`)

})

if(process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({path:'backend/config/.env'})
}


const server =app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection
process.on('unhandledRejection',(err)=>{
    console.log(`server is shuttimg down for ${err.message}`)

    server.close(()=>{
        process.exit(1);
    })
})