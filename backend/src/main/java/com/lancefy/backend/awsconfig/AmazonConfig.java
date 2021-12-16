package com.lancefy.backend.awsconfig;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

@Configuration
public class AmazonConfig {
    Properties prop = new Properties();
    String fileName = "C:\\Users\\Andrei\\Desktop\\CODECOOL\\ADVANCED_MODULE\\lancefy\\backend\\src\\main\\resources\\aws.config";
    FileInputStream fis = new FileInputStream(fileName);
    {
        try {
            prop.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public AmazonConfig() throws FileNotFoundException {
    }

    @Bean
    public AmazonS3 S3() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(
                prop.getProperty("accesKey"),
                prop.getProperty("secretKey")
        );
        return AmazonS3ClientBuilder
                .standard()
                .withRegion("eu-central-1")
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();
    }
}
