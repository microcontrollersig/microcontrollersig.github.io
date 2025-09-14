set shell := ["sh", "-c"]
set windows-shell := ["powershell", "-c"]

@_menu:
    just --list

dev:
    hugo server


