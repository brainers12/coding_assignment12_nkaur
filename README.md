# kaur_navjot_coding_assignment12
To run the React component library on localhost:8083, the following are the steps:

1. Install Docker on your machine if you haven't already.
2. Clone this repository to your local machine.
3. Navigate to the root directory of the cloned repository.
4. Build the Docker image using the following command:
cmd 1: docker build -t <image-name> .
cmd 2 : docker run -d -p 8083:80 --name <container-name>_ui_garden <image-name>



