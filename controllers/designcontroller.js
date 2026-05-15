import Design from "../models/Designmodel.js";
import { generatedesign } from "../ai/openai-integrate.js";
// Create a new design
export const createDesign = async (req, res) => {

    const { design, projectId } = req.body;




    try {

        //calling the llm model for the actual design ;

        const design  = generatedesign();

        
        if(!design){
            return res.status(401).json({
                message:"design not found "

            })
        }

        const newDesign = await Design.createDesign
        const savedDesign = await newDesign.save({
            design
        });
        res.status(201).json(savedDesign, design);
    } catch (error) {
        res.status(500).json({ message: "Error creating design", projectId,  error: error.message });
    }
}


// Get all designs
export const getAllDesigns = async (req, res) => {
    try {
        const desing = await Design.find();
        res.status(200).json(desing);


    } catch (error) {
        res.status(500).json({ message: "Error fetching designs", error: error.message });
    }
}

// Get a single design by ID
export const getDesignById = async (req, res) => {
    try {
        const design = await Design.findById(req.params.id);
        if (!design) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.status(200).json(design);
    } catch (error) {
        res.status(500).json({ message: "Error fetching design", error: error.message });
    }
}




// Update a design by ID
export const updateDesign = async (req, res) => {
    try {
        const updatedDesign = await Design.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedDesign) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.status(200).json(updatedDesign);
    } catch (error) {
        res.status(500).json({ message: "Error updating design", error: error.message });

    }
}
// Delete a design by ID
export const deleteDesign = async (req, res) => {
    try {
        const deletedDesign = await Design.findByIdAndDelete(req.params.id);
        if (!deletedDesign) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.status(200).json({ message: "Design deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting design", error: error.message });
    }
}

// Get all designs
export const getAllDesigns = async (req, res) => {
    try {
        const designs = await Design.find();
        res.status(200).json(designs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching designs", error: error.message });
    }
};

// Get a single design by ID
export const getDesignById = async (req, res) => {
    try {
        const design = await Design.findById(req.params.id);
        if (!design) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.status(200).json(design);
    } catch (error) {
        res.status(500).json({ message: "Error fetching design", error: error.message });
    }
};

// Update a design by ID
export const updateDesign = async (req, res) => {
    try {
        const updatedDesign = await Design.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedDesign) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.status(200).json(updatedDesign);
    } catch (error) {
        res.status(500).json({ message: "Error updating design", error: error.message });
    }
};

// Delete a design by ID
export const deleteDesign = async (req, res) => {
    try {
        const deletedDesign = await Design.findByIdAndDelete(req.params.id);
        if (!deletedDesign) {
            return res.status(404).json({ message: "Design not found" });
        }
        res.status(200).json({ message: "Design deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting design", error: error.message });
    }
};





