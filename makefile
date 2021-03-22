push:
	git add .
	@echo "Please enter commit message:";
	@read commit_msg;\
	git commit -m $$commit_msg
	git push

pull:
	git pull