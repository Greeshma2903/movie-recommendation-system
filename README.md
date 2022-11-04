# movie-recommendation-system

A movie recommendation tool built with the help of Machine Learning (content-based recommender system). Ever take too much time trying to find similar movies? Search up a movie on our site and get recommended with simlar movies to match your taste!

PS: We built this project to practice our skills.

## Team

- [@hk2257853](https://github.com/hk2257853): Backend, Frontend
- [@Greeshma2903](https://github.com/greeshma2903): Design, Frontend
- [@Pratham-cymk](https://www.github.com/Pratham-cymk): Machine Learning

## Tech Stack

- Client: React, WindiCSS
- Server: Node, Express
- ML Model: Numpy, Pandas (Python)

## Setup Locally

### For the ML Model

> - Run the commands in your terminal/command line. 
> - Requirements: python3, pip, npm

1. Clone or download the repo on your local system, and navigate to the project directory.

2. Navigate to `node py` directory
   ```bash
   cd 'node py'
   ```
3. Setup the virtual environment to install the python packages

   > Virtualenv is a tool to set up your Python environments. ([read this for installation](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/))

   ```bash
   # install virtual environment to your host python, if you haven't already:
      # pip install virtualenv
      # OR
      # python -m pip install virtualenv

   # use the virtual env
   python<version> -m venv env
   # example
   python3 -m venv env
   ```

   To activate the virual environment:

   ```bash
   # on mac or linux
   source env/bin/activate

   # on windows
   env/Scripts/activate.bat # in CMD line
   env/Scripts/Activate.ps1 # in Powershell
   ```

4. Install all the libraries mentioned in the `requirements.txt` file with the command:

   ```bash
   pip install -r requirements.txt

   # OR
   python -m pip install -r requirements.txt
   ```

5. Dectivate the environment after you're done with your work:
   ```bash
   deactivate
   ```
6. To run the node server
   ```bash
   npm install
   npm start
   ```

### Client

1. Go to the project directory

   ```bash
   cd client
   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Run the server at localhost
   ```bash
   npm run dev
   ```

## License

[MIT](https://choosealicense.com/licenses/mit/)
