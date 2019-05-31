# Bug Writing Guidelines

The following page contains guidelines to write clear and concise bug reports, followed by an example. As the first step, please read this page:

https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines

## Bug Report Example

### Summary

iPhone N: Cannot upload 100 MB video/MP4 file (1 hour, 15 minutes)

### Description

On the production application/website, we are unable to upload 100 MB MP4 videos. The duration of these videos is approx. 1 hour and 15 minutes.

Note:
We are able to upload 50 MB MP3 videos. The duration of these videos is approx. 45 minutes.

### Configuration

1. Problem Start Date/Time: 2018-04-17 09:00 ET
2. Authentication: Username/Password -OR- Username/Certificate
3. User/s: John McClane
4. Browser: Chrome Version 65.0.3325.181
5. Application: https://my_awesome.staging.app

### Steps to Reproduce

1. iPhone N: Open Chrome browser
2. Chrome: Navigate to https://my_awesome.staging.app
3. Click 'Upload' -> 'Video'
4. Select video file
5. Click 'Upload Now'

### Expected Results

1. Chrome: Displays video upload status/percentage
2. Chrome: Displays 'Video uploaded successfully' message

### Actual Results

The browser displays this error message: "Upload Error. Please try again."

Please see attached screenshot/s: FILE1.EXTN

Please see attached error log/s: FILE2.EXTN
