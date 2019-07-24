# Firebase AutoML

## About
We are using the [Cloud AutoML API Client](https://googleapis.dev/nodejs/automl/latest/index.html) to classify our (as of now, only bottle) pictures to see if they match the type of challenge the user is completing.

## Before you begin
Read this [Setup Guide](https://cloud.google.com/vision/automl/docs/before-you-begin).

To set the environment variable on Windows:

With PowerShell:
```sh
$env:GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
 ```
Example:
```sh
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\[FILE_NAME].json"
```
With command prompt:
```sh
set GOOGLE_APPLICATION_CREDENTIALS=[PATH]
```
Example:
```sh
set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\username\Downloads\[FILE_NAME].json
```
(Notice there are no quotes unlike in the PowerShell example)

To set the environment variable on Linux/macOS:
```shell
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
```
Example:
```sh
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"
```

For more information go to the [Authentication Guide](https://cloud.google.com/docs/authentication/getting-started#auth-cloud-implicit-nodejs).
