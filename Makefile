gh-pages:
	git subtree push --prefix=dist origin gh-pages

upload:
	git add .
	git commit -m "$(msg)"
	git push
	git subtree push --prefix=dist origin gh-pages