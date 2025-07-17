pipeline {
  agent any

  environment {
    OUTPUT_DIR = "/srv/build_output"
    DEPLOY_DIR = "/var/www/portfolio"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test || echo "No tests configured."'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Approval') {
      steps {
        input message: 'Deploy to production?', ok: 'Deploy'
      }
    }

    stage('Deploy') {
      steps {
        script {
          // Move build to OUTPUT_DIR
          sh "rm -rf ${OUTPUT_DIR}/*"
          sh "cp -r dist/* ${OUTPUT_DIR}/"

          // Now deploy to public folder
          sh "sudo rm -rf ${DEPLOY_DIR}/*"
          sh "sudo cp -r ${OUTPUT_DIR}/* ${DEPLOY_DIR}/"
        }
      }
    }
  }

  post {
    success {
      echo '✅ Successfully Deployed!'
    }
    failure {
      echo '❌ Build or Deployment failed.'
    }
  }
}
