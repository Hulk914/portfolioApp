git add .
git commit -am "made changes"
git push
heroku container:login
heroku container:push -a ayush-portfolio-app web
heroku container:release web