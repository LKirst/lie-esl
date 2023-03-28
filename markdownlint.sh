# MD003 is violated because the end of the yaml front matter is parsed as a heading
# MD041 is violated because due to the yaml front matter, the first line is not a heading
pymarkdown -d MD003,MD041 scan . ./*/*
