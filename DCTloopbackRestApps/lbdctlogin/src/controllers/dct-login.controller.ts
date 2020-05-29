// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { inject } from '@loopback/core';
import { model, property, repository } from '@loopback/repository';
import { GenUser } from '../models';
import { GenUserRepository } from '../repositories';
import { get, getModelSchemaRef, post, requestBody, HttpErrors } from '@loopback/rest';

const CredentialsSchema = {
    type: 'object',
    required: ['usermeail', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
            minLength: 8,
        },
    },
};

export const CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};


export class DctLoginController {
    constructor(@repository(GenUserRepository) protected userRepository: GenUserRepository) { }

    async login(@requestBody(CredentialsRequestBody) credentials: any,) {
        const invalidCredentialsError = 'Invalid email or password.';

        const foundUser = await this.userRepository.findOne({
            where: { email: credentials.email, password: credentials.password },
        });
        if (!foundUser) {
            throw new HttpErrors.Unauthorized(invalidCredentialsError);
        }       

        return foundUser;
    }

}
