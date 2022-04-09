# cypress project hiboo

## Prérequisites

nodejs v16.14.2

## Run test

```
git clone https://github.com/rwralitera/hiboo.git
cd ./hiboo
yarn install
yarn cypress:open:hiboo (OR yarn cypress:run:hiboo)
```

## Notes

- I skipped the test link for linkedin and /pricing url to let test pass because I do not have the rights
- After sending a reset password, there is no BACK button on the page 'Intructions envoyées !'
- I tried to use different selector and different kind of verifications to show the usage of them
- I don't know if it is normal that the Login page is not on the same baseURL (app.hiboo.fr). So I did the simple tests on it directly
- When running the test with cypress:open:hiboo, the website is in French
- When running the test with cypress:run:hiboo, the website is in English (I tried to force the language system to FR: export LANG=\"fr_FR.UTF-8\" that should work on Linux machine)

## More details?

If you need more scenarios or specific concepts or explanations or anything else, please ping me!
