#imports argv from sys
from sys import argv

#defines variables (script and filename) based on arguments
#script is the first parameter and filename is the second paramter
script, filename = argv

#opens filename and stores it into txt
txt = open(filename)

#prints file name and reads whatever it says inside the file
print(f"Here's your file {filename}:")
print(txt.read())

#prints file name again and stores the user's input into file_again variable
print("Type the filename again:")
file_again = input("> ")

#opens file_again which is the same as filename
txt_again = open(file_again)

#prints whatever written in file
print(txt_again.read())