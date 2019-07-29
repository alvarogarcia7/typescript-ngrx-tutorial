.PHONY: sync
sync:
	git pull
	git push --all

.PHONY: import
import:
	mv ~/Downloads/gkpvbkdnmvn.angular.zip . 
	unzip -o gkpvbkdnmvn.angular.zip
	rm gkpvbkdnmvn.angular.zip

