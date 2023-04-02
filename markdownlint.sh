#!/usr/bin/bash
pymarkdown --strict-config -s extensions-front-matter.enabled=$!True scan test.md
