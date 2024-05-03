{
    // conditional types

    type MeInFuture = {
        bike: string;
        car: string;
        yacht: string;
        privateJet: string;
    }

    type CheckVehicle <T> = T extends keyof MeInFuture ? true : false // here when the condition is true it will return true otherwise false.

    type HasYacht = CheckVehicle<'yacht'>
}