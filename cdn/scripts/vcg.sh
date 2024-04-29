#!/bin/bash

# Function to calculate Adler32 checksum
function adler32() {
    printf "$1" | openssl dgst -adler32 -binary | openssl enc -base64
}

# Function to calculate SHA1 checksum
function sha1() {
    printf "$1" | openssl dgst -sha1
}

# Read input
read -p "Name: " input

# Calculate Adler32 checksum
adler32_result=$(adler32 "$input")

# Place the result between <cpk> and </cpk>
cpk="<cpk>${adler32_result}</cpk>"
fname="#${adler32_result}#.cpk"
# Calculate SHA1 checksum of the result
sha1_result=$(sha1 "$cpk")

# Print the SHA1 checksum
echo "File Name: ${fname}"
echo "File Content: ${sha1_result}"

