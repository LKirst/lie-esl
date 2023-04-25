#!/usr/bin/bash
pymarkdown --strict-config --disable-rules md033 -s extensions.front-matter.enabled=\$!True scan . -r
