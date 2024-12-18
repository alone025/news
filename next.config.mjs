/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080', // Include the port if necessary
                pathname: '/api/photos/**', // Adjust the pathname as needed
              },
              {
                protocol: 'https',
                hostname: 'meradog.ru',
                port: '', // Include the port if necessary
                pathname: '/upload/pictures/**', // Adjust the pathname as needed
              },

              {
                protocol: 'https',
                hostname: 'dennews-back.onrender.com',
                port: '', // Include the port if necessary
                pathname: '/photos/**', // Adjust the pathname as needed
              },
        
        ]
    }
};

export default nextConfig;
