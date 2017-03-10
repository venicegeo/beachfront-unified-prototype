#!/bin/bash -e

python3 -m venv .virtualenv

. .virtualenv/bin/activate

echo -e "\nInstalling Python libraries\n"
pip install -r requirements.txt

echo -e "\nInstalling Node libraries\n"
cd ui
npm install
