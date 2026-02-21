default: all

all: nixos.pdf

nixos.pdf: nixos.tex $(wildcard *.tex)
	latexmk -f -pdflatex -aux-directory=aux $<
