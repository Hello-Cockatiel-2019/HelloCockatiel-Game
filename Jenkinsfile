pipeline{
  agent any
  stages {
        stage('dev'){
            when {branch 'dev'}
            steps{
            sh' ssh cockatiel@103.86.50.70 " pm2 delete ${JOB_NAME} || : " '
            sh' ssh cockatiel@103.86.50.70 " mkdir -p /home/cockatiel/${JOB_NAME} " '
            sh' ssh cockatiel@103.86.50.70 " rm -rf /home/cockatiel/${JOB_NAME}/* || : " '
            sh' scp -r * cockatiel@103.86.50.70:/home/cockatiel/${JOB_NAME} '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && yarn && PORT=4000 pm2 start yarn --name "${JOB_NAME}" -- dev " '
            sh' curl -X POST "https://api.cloudflare.com/client/v4/zones/ace57d8bd8257975cdc0dda90bc49946/purge_cache" -H "X-Auth-Email: sittiwat.j@mail.kmutt.ac.th" -H "X-Auth-Key: 364800243c0f94861ab1ae839da030d4c1f69" -H "Content-Type: application/json" --data \'{"purge_everything":true}\' '
            }
        }
        stage('master'){
            when {branch 'master'}
            steps{
            sh' ssh cockatiel@103.86.50.70 " pm2 delete ${JOB_NAME} || : " '
            sh' ssh cockatiel@103.86.50.70 " mkdir -p /home/cockatiel/${JOB_NAME} " '
            sh' ssh cockatiel@103.86.50.70 " rm -rf /home/cockatiel/${JOB_NAME}/* || : " '
            sh' scp -r * cockatiel@103.86.50.70:/home/cockatiel/${JOB_NAME} '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && yarn " '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && yarn deploy " '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && pm2 start serve --name "${JOB_NAME}" -- -l 6000 -s build " '
            sh' curl -X POST "https://api.cloudflare.com/client/v4/zones/ace57d8bd8257975cdc0dda90bc49946/purge_cache" -H "X-Auth-Email: sittiwat.j@mail.kmutt.ac.th" -H "X-Auth-Key: 364800243c0f94861ab1ae839da030d4c1f69" -H "Content-Type: application/json" --data \'{"purge_everything":true}\' '
            }
        }
  }
}
