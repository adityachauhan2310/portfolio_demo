pipeline {
  // ───────────────────────────────────────────────────────────────
  // 1) Use a Docker cloud agent for everything
  // ───────────────────────────────────────────────────────────────
  agent { label 'docker-agent' }

  environment {
    // Where on the HOST we want to land the built site
    BUILD_OUT = '/srv/build_output'
    LIVE_DIR  = '/var/www/portfolio'
    IMAGE_TAG = "portfolio-builder:${env.BUILD_NUMBER}"
  }

  stages {
    // ─────────────────────────────────────────────────────────────
    // Checkout your code
    // ─────────────────────────────────────────────────────────────
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    // ─────────────────────────────────────────────────────────────
    // Install, test, build inside your Docker image
    // ─────────────────────────────────────────────────────────────
    stage('Build & Test') {
      steps {
        script {
          // 1) Build your Docker image from the Dockerfile
          def img = docker.build(IMAGE_TAG)
          // 2) Run tests & build inside that container
          img.inside {
            sh 'npm install'
            sh 'npm test'
            sh 'npm run build'
          }
          // 3) Export dist/ out to the HOST's /srv/build_output via a volume
          sh """
            docker run --rm \\
              -v ${BUILD_OUT}:/output \\
              ${IMAGE_TAG}
          """
        }
      }
    }

    // ─────────────────────────────────────────────────────────────
    // Manual Approval before we overwrite production
    // ─────────────────────────────────────────────────────────────
    stage('Approve Deploy') {
      steps {
        timeout(time: 1, unit: 'DAYS') {
          input message: '✅ Ready to deploy new build to production?', ok: 'Deploy'
        }
      }
    }

    // ─────────────────────────────────────────────────────────────
    // Deploy by copying from build_output → var/www/portfolio
    // ─────────────────────────────────────────────────────────────
    stage('Deploy to Live') {
      steps {
        // We use a throwaway Alpine container to perform the copy on the HOST
        sh """
          docker run --rm \\
            -v ${BUILD_OUT}:/src \\
            -v ${LIVE_DIR}:/dest \\
            alpine sh -c "rm -rf /dest/* && cp -r /src/* /dest/"
        """
      }
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Post‐build notification messages
  // ─────────────────────────────────────────────────────────────
  post {
    success {
      echo "🎉 Deployment complete! Your site is live at https://demo.clickinfotech.in"
    }
    failure {
      echo "🚨 Build or deploy failed. Check the console output above."
    }
  }
}
