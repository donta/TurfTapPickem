import apiClient from "../apiClient";
import type { Pet } from "../models/pet.interface";

export enum DemoApi {
	TOKEN_EXPIRED = "/Test/pets",
}

const mockPets = () => apiClient.get<Pet[]>({ url: DemoApi.TOKEN_EXPIRED });

export default {
	mockPets,
};
