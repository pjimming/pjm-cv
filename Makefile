gh-pages:
	git subtree push --prefix=dist origin gh-pages

upload:
	npm run build
	git add .
	git commit -m "$(msg)"
	git push
	git subtree push --prefix=dist origin gh-pages