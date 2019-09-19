pipeline{
  agent any
  stages {
	stage('build'){
		steps{
			sh 'echo "========================================================"'
		}
	}
   	stage('test'){
		steps{
			sh 'echo "=================== [ Step : Test. [2/3] ] ====================="'
		}
    	}
   	stage('production'){
		steps{
			sh 'echo "============= [ Step : Production. [3/3] ] ===================================="'
		}
    	}
  }
}
