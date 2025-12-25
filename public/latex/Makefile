default: all

all: resume.pdf cv.pdf

resume.pdf: resume.tex $(wildcard *.tex)
	latexmk -f -pdflatex -aux-directory=aux $<

cv.pdf: cv.tex $(wildcard *.tex)
	latexmk -f -pdflatex -aux-directory=aux $<
